import axios from 'axios';
import Notification from '@colbycommunications/colby-notification';

axios.interceptors.response.use(
    response => response,
    error => {
        if (error && error.response) {
            // Do something with response error
            switch (error.response.status) {
                case 404:
                    Notification({
                        message: `${error.response.status}: Route Not Found`,
                        type: 'danger',
                        duration: 10000,
                    });
                    break;

                default:
                    Notification({
                        message: `${error.response.status} : ${error.message}`,
                        type: 'danger',
                        duration: 10000,
                    });
                    break;
            }
        }
        return Promise.reject(error);
    }
);

export default axios;
