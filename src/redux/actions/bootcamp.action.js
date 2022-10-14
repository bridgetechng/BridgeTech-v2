import {} from '../reducers/bootcamp.slice';
import { db, fb, auth, storage } from '../../config/firebase';

export const buyBootcamp = (courses, uid, today, history) => async (dispatch) => {
    var bootcampRef = db.collection("bootcamp");
    bootcampRef.add({
        uid: uid,
        courses: courses,
        createdAt: today,
    })
    .then(() => {
      const msg = 'Bootcamp bought successfully😁';
      alert(msg);
      history.push('/apps/bootcamp');
    })
    .catch((error) => {
      var errorMessage = error.message;
      console.log('Error creating bootcamp', errorMessage);
    });
  }