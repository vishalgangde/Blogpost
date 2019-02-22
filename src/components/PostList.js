import React from 'react';
import { connect } from 'react-redux';
import { fetchPostAndUser } from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component {
    componentDidMount() {
        //console.log(this.props);
        this.props.fetchPostAndUser();
    }

    renderList() {
        // console.log(this.props.posts);
        if (this.props.posts.data !== undefined) {
            return this.props.posts.data.map(post => {
                return (
                    <div className="item" key={post.id}>
                        <i className="large middle aligned icon user" />
                        <div className="content">
                            <div className="description">
                                <h2>{post.title}</h2>
                                <p>{post.body}</p>
                            </div>
                            <UserHeader userId={post.userId} />
                        </div>
                    </div>
                );
            });
        }
    }
    render() {
        //console.log(this.renderList());
        return (
            <div className="ui relaxed divided list">
                {this.renderList()}
            </div>
        );
    };
};
const mapStateToProps = (state) => {
    //console.log(state);
    return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPostAndUser })(PostList);