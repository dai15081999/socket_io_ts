import React, { useContext } from 'react';
import SocketContext from './contexts/SocketContext';

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
    const { socket, uid, users } = useContext(SocketContext).SocketState;

    return (
        <div>
            <h2>Socket IO:</h2>
            <p>
                 ID: <strong>{uid}</strong>
                <br />
                 online: <strong>{users.length}</strong>
                <br />
                Socket ID: <strong>{socket?.id}</strong>
                <br />
            </p>
        </div>
    );
};

export default Application;
