import 'isomorphic-fetch'

import { API_EVENTS, API_HEADER } from '../../../../../../config'
import auth from '../../services/auth/login'

export default {
    fetchEvents() {
        return new Promise((resolve, reject) => {
            return fetch(API_EVENTS, {
                method: 'POST',
                headers: API_HEADER,
                body: JSON.stringify({event: 'GET', data: {userId: auth.getUserId()}})
            })
                .then(response => response.ok ? response.json() : response.json().then(err => Promise.reject(err)))
                .then(json => resolve(json))
                .catch(err => reject(err))
        })
    },

    createEvent(event){
        return new Promise((resolve, reject) => {
            return fetch(API_EVENTS, {
                method: 'POST',
                headers: API_HEADER,
                body: JSON.stringify({event: 'CREATE', data: {userId: auth.getUserId(), event}})
            })
                .then(response => response.ok ? response.json() : response.json().then(err => Promise.reject(err)))
                .then(json => resolve({id: json, userId: auth.getUserId()}))
                .catch(err => reject(err))
        })
    },

    updateNote(event){
        return fetch(API_EVENTS, {
            method: 'POST',
            headers: API_HEADER,
            body: JSON.stringify({event: 'UPDATE', data: event})
        })
            .then(response => response.ok ? response.text() : response.text().then(err => Promise.reject(err)))
            .then(text => text)
            .catch(err => console.log(err))
    },

    removeNote(event){
        return fetch(API_EVENTS, {
            method: 'POST',
            headers: API_HEADER,
            body: JSON.stringify({event: 'REMOVE', data: {id: event.objectId}})
        })
            .then(response => response.ok ? response.text() : response.text().then(err => Promise.reject(err)))
            .then(text => text)
            .catch(err => console.log(err))
    }
}
