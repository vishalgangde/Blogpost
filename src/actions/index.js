import _ from 'lodash';
import JsonPlaceHolder from '../apis/JsonPlaceHolder';

export const fetchPostAndUser = () => async (dispatch,getState) => {
    
    await dispatch(fetchPosts());
   // console.log(getState().posts);
    const userIds = _.uniq(_.map(getState().posts,'userId'));
    userIds.forEach(id=> dispatch (fetchUser(id)));
    console.log(userIds);
    
};

//Creating ActionCreator
export const fetchPosts = () => async dispatch => {
    const response = await JsonPlaceHolder.get('/posts');

    dispatch({ type: 'FETCH_POST', payload: response});

};

export const fetchUser = id => async dispatch => {
    const response = await JsonPlaceHolder.get(`/users/${id}`);

    dispatch({ type: 'FETCH_USER', payload: response.data});

};

/*export const fetchUser =  id => dispatch => {
   _fetchUser(id,dispatch); 
}
   //return async function (dispatch)  {
       const _fetchUser = _.memoize(async (id,dispatch)=>{
        const response = await JsonPlaceHolder.get(`/users/${id}`);

        dispatch({ type: 'FETCH_USER', payload: response.data });
    
       });*/
    
    