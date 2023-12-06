import {FunctionComponent, ReactNode, useState} from "react";

import {AlertType, AlertTypeMap} from "./utils.ts";


interface AlertProps {
    type: AlertType;
    text: ReactNode;
}

const Alert: FunctionComponent<AlertProps> = (props) => {
    const {type, text} = props;
    const {heading, colors} = AlertTypeMap[type];

    const [isClosed, setClosed] = useState(false);

    if (isClosed) {
        return null;
    }

    return (
        <div role="alert" className={`pt-[35px]`}>
            <div className={`${colors.bgHeading} text-white font-bold rounded-t px-4 py-2`}>
                {heading}
                <button
                    className="float-right text-white"
                    onClick={() => setClosed(true)}
                >x
                </button>
            </div>
            <div
                className={`border border-t-0 ${colors.border} rounded-b ${colors.bgText} px-4 py-3 ${colors.text}`}
            >
                <p>
                    {text}
                </p>
            </div>
        </div>
    );
};

export default Alert;
