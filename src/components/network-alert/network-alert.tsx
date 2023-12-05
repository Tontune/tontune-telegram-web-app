import {FunctionComponent, ReactNode, useState} from "react";

type AlertType = 'danger' | 'warning' | 'info' | 'success'

type AlertProperties = { heading: string; color: string }

const AlertTypeMap: Record<AlertType, AlertProperties> = {
    'danger': {heading: 'Danger', color: 'red'},
    'warning': {heading: 'Warning', color: 'yellow'},
    'info': {heading: 'Information', color: 'blue'},
    'success': {heading: 'Success', color: 'green'},
};

interface AlertProps {
    type: AlertType;
    text: ReactNode;
}

const Alert: FunctionComponent<AlertProps> = (props) => {
    const {type, text} = props;
    const {heading, color} = AlertTypeMap[type];

    const [isClosed, setClosed] = useState(false);

    if (isClosed) {
        return null;
    }

    return (
        <div role="alert" className={`pt-[35px]`}>
            <div className={`bg-${color}-500 text-white font-bold rounded-t px-4 py-2`}>
                {heading}
                <button
                    className="float-right text-white"
                    onClick={() => setClosed(true)}
                >x
                </button>
            </div>
            <div
                className={`border border-t-0 border-${color}-400 rounded-b bg-${color}-100 px-4 py-3 text-${color}-700`}
            >
                <p>
                    {text}
                </p>
            </div>
        </div>
    );
};

export default Alert;
