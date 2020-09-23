/**
 * @author Prathima S R
 * @email prathima5raj@yahoo.com
 * @create date 2020-08-29 11:37:12
 * @modify date 2020-08-29  11:37:12
 */

import ActionTypes from '../../constants/ActionTypes';

const releasesState = {
    id: 1,
    description: 'capsules user',
    startDate: '23/08/2009',
    endDate: '09/07/2020',
    versionStatus: 'IN PROGRESS',
    progress: 0,
    versionName: 'Version 1.0',
    taskProgress: 0,
    tasksProgressValues: []
};

export const addVersions = (state = releasesState, action) => {
    switch (action.type) {
        case ActionTypes.EDIT_VERSION_NAME:
            return {
                ...state,
                versionName: action.payload
            };

        case ActionTypes.EDIT_VERSION_STATUS:
            return {
                ...state,
                versionStatus: action.payload
            };
        case ActionTypes.EDIT_RELEASE_PROGRESS:
            return {
                ...state,
                progress: action.payload
            };

        case ActionTypes.ENTER_RELEASE_START_DATE:
            return {
                ...state,
                startDate: action.payload
            };
        case ActionTypes.ENTER_RELEASE_DESCRIPTION:
            return {
                ...state,
                description: action.payload
            };

        case ActionTypes.ADD_RELEASES_ALL_DATA:
            return {
                ...state,
                [action.payload.key]: action.payload.value
            };

        case ActionTypes.RELEASE_RESET:
            return {
                ...state,
                progress: 0,
                description: '',
                startDate: '',
                endDate: '',
                versionStatus: '',
                versionName: ''
            };

        case ActionTypes.ENTER_RELEASE_LAST_DATE:
            return {
                ...state,
                endDate: action.payload
            };

        case 'TASK_PROGRESS':
            return {
                ...state,
                taskProgress: action.payload
            };
        default:
            return state;
    }
};
