/**
 * @author Prathima S R
 * @email prathima5raj@yahoo.com
 * @create date 2020-08-29 11:37:12
 * @modify date 2020-08-29  11:37:12
 */

'use strict';
import axios from 'axios';
import ServiceConstants from './ServiceConstants';

export default class userServices {
    static saveUser() {
        return axios.post(ServiceConstants.save_user);
    }
    static saveAdmin() {
        return axios.post(ServiceConstants.save_user);
    }

    static displayHistory() {
        return axios.get(ServiceConstants.display_history);
    }

    static displayCapsules() {
        return axios.get(ServiceConstants.display_capsules);
    }

    static displayRoadster() {
        return axios.get(ServiceConstants.display_roadster);
    }
}
