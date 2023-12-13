import { SyntheticEvent, useCallback, useEffect, useRef, useState } from 'react';
import isEmpty from 'lodash/isEmpty';

import { AudioBar } from '@/components/audio-player/components/audio-bar';
import { FullViewAudioBar } from '@/components/audio-player/components/audio-bar/full-view-audio-bar';
import { BottomSheet } from '@/components/audio-player/components/bottom-sheet';
import { InternalAudio } from '@/components/audio-player/components/internal-audio';
import { useTypedDispatch, useTypedSelector } from '@/store';
import { setIsStartListen, setPlaylist } from '@/store/slices/listen';

export const AudioPlayer = () => {
  const dispatch = useTypedDispatch();

  const isStartListen = useTypedSelector(state => state.listen.isStartListen);
  const audioIndex = useTypedSelector(state => state.listen.audioIndex);
  const playlist = useTypedSelector(state => state.listen.playlist);

  const [isPlay, setIsPlay] = useState(false);
  const [isListen, setIsListen] = useState(false);
  const [isFullView, setIsFullView] = useState(false);
  const [isActiveLoop, setIsActiveLoop] = useState(false);
  const [isActiveShuffle, setIsActiveShuffle] = useState(false);

  const [duration, setDuration] = useState(0);
  const [currentProgress, setCurrentProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const currentSong = playlist[currentSongIndex];

  useEffect(() => {
    setCurrentSongIndex(audioIndex);
  }, [audioIndex]);

  useEffect(() => {
    audioRef.current?.pause();
    audioRef.current?.load();
    audioRef.current?.play().catch(e => console.log(e));
  }, [currentSongIndex, isStartListen]);

  const handleNextAudio = useCallback(
    (audioId?: number) => {
      if (audioId !== undefined) {
        setCurrentSongIndex(audioId);
      } else if (isActiveShuffle) {
        setCurrentSongIndex((/* index */) => Math.floor(Math.random() * playlist.length));
      } else if (currentSongIndex < playlist.length - 1) {
        setCurrentSongIndex(i => i + 1);
      }

      audioRef.current?.load();
      audioRef.current?.play().catch(e => console.log(e));
    },
    [currentSongIndex, isActiveShuffle, playlist.length],
  );

  const handlePrevAudio = useCallback(() => {
    if (isActiveShuffle) {
      setCurrentSongIndex(Math.floor(Math.random() * playlist.length));
    } else {
      setCurrentSongIndex(prevIndex => prevIndex - 1);
    }
    audioRef.current?.load();
    audioRef.current?.play().catch(e => console.log(e));
  }, [isActiveShuffle, playlist.length]);

  const handlePlayAudio = useCallback(
    (e: SyntheticEvent) => {
      e.stopPropagation();
      if (isPlay) {
        audioRef.current?.pause();
        setIsPlay(false);
      } else {
        audioRef.current?.play();
        setIsPlay(true);
      }
    },
    [audioRef, isPlay],
  );

  const handleOpenFullView = useCallback(() => setIsFullView(true), []);

  const handleCloseFullView = useCallback(() => setIsFullView(false), []);

  const handleActiveControls = useCallback(
    (e: SyntheticEvent) => {
      const targetName = (e.currentTarget as HTMLButtonElement).name;
      console.log(targetName);
      if (targetName === 'loop') {
        setIsActiveLoop(!isActiveLoop);
      }
      if (targetName === 'shuffle') setIsActiveShuffle(!isActiveShuffle);
    },
    [isActiveLoop, isActiveShuffle],
  );

  const handlePlayNext = useCallback(
    (audioId: number) => {
      const updatedPlaylist = [...playlist];
      const songToMove = updatedPlaylist[audioId];
      updatedPlaylist.splice(currentSongIndex + 1, 0, songToMove);

      dispatch(setPlaylist(updatedPlaylist));
    },
    [currentSongIndex, dispatch, playlist],
  );

  const handleAddToQueue = useCallback(
    (audioId: any) => {
      const updatedPlaylist = [...playlist];
      const songToMove = updatedPlaylist[audioId];
      updatedPlaylist.push(songToMove);

      return dispatch(setPlaylist(updatedPlaylist));
    },
    [dispatch, playlist],
  );
  const handleCloseAudioPlayer = (e: SyntheticEvent) => {
    e.stopPropagation();
    setIsListen(false);
    audioRef.current?.pause();
    dispatch(setIsStartListen(false));
  };

  return isStartListen && !isEmpty(currentSong) ? (
    <>
      <InternalAudio
        audioRef={audioRef}
        currentSong={currentSong}
        setCurrentProgress={setCurrentProgress}
        handleNextAudio={handleNextAudio}
        setIsPlay={setIsPlay}
        setIsListen={setIsListen}
        setDuration={setDuration}
        isActiveLoop={isActiveLoop}
      />
      {!isFullView ? (
        <AudioBar
          isFullView={isFullView}
          isPlay={isPlay}
          isListen={isListen}
          handlePlayAudio={handlePlayAudio}
          handleCloseAudioPlayer={handleCloseAudioPlayer}
          handleOpenFullView={handleOpenFullView}
          currentSong={currentSong}
        />
      ) : (
        <BottomSheet
          overlay="dark"
          background="dark"
          swipeable
          close={handleCloseFullView}
          isFullScreen
          width="appWidth"
        >
          <div className="pt-[25px]">
            <FullViewAudioBar
              isPlay={isPlay}
              handlePlayAudio={handlePlayAudio}
              innerRef={audioRef}
              duration={duration}
              currentProgress={currentProgress}
              setCurrentProgress={setCurrentProgress}
              onNext={handleNextAudio}
              onPrev={handlePrevAudio}
              currentSong={currentSong}
              disabledNext={playlist.length === currentSongIndex + 1 && !isActiveShuffle}
              disabledPrev={currentSongIndex === 0 && !isActiveShuffle}
              handleActiveControls={handleActiveControls}
              isActiveLoop={isActiveLoop}
              isActiveShuffle={isActiveShuffle}
              handlePlayNext={handlePlayNext}
              handleAddToQueue={handleAddToQueue}
              currentIdAudio={currentSongIndex}
            />
          </div>
        </BottomSheet>
      )}
    </>
  ) : null;
};
