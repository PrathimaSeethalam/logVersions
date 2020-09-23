/**
 * @author Prathima S R
 * @email prathima5raj@yahoo.com
 * @create date 2020-08-29 11:37:12
 * @modify date 2020-08-29  11:37:12
 */
import ActionTypes from '../../constants/ActionTypes';

export const versionName = versionName => {
    return {
        type: ActionTypes.EDIT_VERSION_NAME,
        payload: versionName
    };
};

export function versionStatus(versionStatus) {
    return {
        type: ActionTypes.EDIT_VERSION_STATUS,
        payload: versionStatus
    };
}

export const getReleaseStartDate = startDate => {
    return {
        type: ActionTypes.ENTER_RELEASE_START_DATE,
        payload: startDate
    };
};
export const getReleaseEndDate = endDate => {
    return {
        type: ActionTypes.ENTER_RELEASE_LAST_DATE,
        payload: endDate
    };
};

export const addReleaseDescription = description => {
    return {
        type: ActionTypes.ENTER_RELEASE_DESCRIPTION,
        payload: description
    };
};
export const addReleaseProgress = progress => {
    return {
        type: ActionTypes.EDIT_RELEASE_PROGRESS,
        payload: progress
    };
};

export const addReleaseData = (key, value) => {
    return {
        type: ActionTypes.ADD_RELEASES_ALL_DATA,
        payload: { key, value }
    };
};

export const resetReleases = () => {
    return {
        type: ActionTypes.RELEASE_RESET
    };
};
export const getTaskProgress = taskProgress => {
    return {
        type: 'TASK_PROGRESS',
        payload: taskProgress
    };
};

export const getTaskProgressEndValue = taskProgress => {
    return {
        type: 'TASK_PROGRESS',
        payload: taskProgress
    };
};
