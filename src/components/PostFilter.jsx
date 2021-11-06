import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";
import PostList from "./PostList";

const PostFilter = ({filter, setFilter}) => {

    return (
        <div>
            <MyInput
                value={filter.query}
                placeholder={"search"}
                onChange={e => setFilter({...filter, query: e.target.value})}
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue={"sort by"}
                options={[
                    {value: "title", name: "by name"},
                    {value: "body", name: "by description"}
                ]}
            />
        </div>
    );
};

export default PostFilter;