import {
    SET_RECENT_POSTS
} from "../actions/types";
import RecentPosts from "./components/recent-posts";

const INIT_STATE = {
    posts: [],
    RecentPosts: []
}

export default function(state = INIT_STATE, action) {
    switch (action.type) {
        case SET_RECENT_POSTS:
            
            return [...state, RecentPosts, action.payload];
        default:
            return state;
    }
}