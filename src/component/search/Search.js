import React from "react";
import "./Search.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "../chanellRow/ChannelRow";
import VideoRow from "../chanellRow/VideoRow";
function Search() {
  return (
    <div className="search">
      <div className="search__filter">
        <TuneOutlinedIcon className="search__filter__icon" />
        <h4>FILTER</h4>
      </div>
      <hr />
      <ChannelRow
        image="https://user-images.githubusercontent.com/36238748/94991519-57739c00-05a1-11eb-8866-3685c3ad7cf6.jpg"
        channel="Shantanu Mishra"
        verified
        subs="2M"
        noOfVideos={400}
        descriptions="You can find cool projects about web development and AI & ml"
      />
      <hr />
      <VideoRow
        views="2.6M"
        subs="2M"
        description="This is a Machine Learning Web app which is contain all of the Algorithum of machine learning and no need to write code again and again || smash it ||"
        timestamp="3 days ago"
        channel="Shantanu Mishra"
        title="Machine Learning Web App with Streamlit"
        image="https://user-images.githubusercontent.com/36238748/94992649-239c7480-05a9-11eb-882c-b068cf8df924.png"
        cc
      />
      <VideoRow
        views="2.6M"
        subs="2M"
        description="This is a Machine Learning Web app which is contain all of the Algorithum of machine learning and no need to write code again and again || smash it ||"
        timestamp="3 days ago"
        channel="Shantanu Mishra"
        title="Machine Learning Web App with Streamlit"
        image="https://user-images.githubusercontent.com/36238748/94992649-239c7480-05a9-11eb-882c-b068cf8df924.png"
        newV
        cc
      />
      <VideoRow
        views="2.6M"
        subs="2M"
        description="This is a Machine Learning Web app which is contain all of the Algorithum of machine learning and no need to write code again and again || smash it ||"
        timestamp="3 days ago"
        channel="Shantanu Mishra"
        title="Machine Learning Web App with Streamlit"
        image="https://user-images.githubusercontent.com/36238748/94992649-239c7480-05a9-11eb-882c-b068cf8df924.png"
        newV
      />
      <VideoRow
        views="2.6M"
        subs="2M"
        description="This is a Machine Learning Web app which is contain all of the Algorithum of machine learning and no need to write code again and again || smash it ||"
        timestamp="3 days ago"
        channel="Shantanu Mishra"
        title="Machine Learning Web App with Streamlit"
        image="https://user-images.githubusercontent.com/36238748/94992649-239c7480-05a9-11eb-882c-b068cf8df924.png"
      />
      <VideoRow
        views="2.6M"
        subs="2M"
        description="This is a Machine Learning Web app which is contain all of the Algorithum of machine learning and no need to write code again and again || smash it ||"
        timestamp="3 days ago"
        channel="Shantanu Mishra"
        title="Machine Learning Web App with Streamlit"
        image="https://user-images.githubusercontent.com/36238748/94992649-239c7480-05a9-11eb-882c-b068cf8df924.png"
        cc
      />
      <VideoRow
        views="2.6M"
        subs="2M"
        description="This is a Machine Learning Web app which is contain all of the Algorithum of machine learning and no need to write code again and again || smash it ||"
        timestamp="3 days ago"
        channel="Shantanu Mishra"
        title="Machine Learning Web App with Streamlit"
        image="https://user-images.githubusercontent.com/36238748/94992649-239c7480-05a9-11eb-882c-b068cf8df924.png"
        newV
        cc
      />
      <VideoRow
        views="2.6M"
        subs="2M"
        description="This is a Machine Learning Web app which is contain all of the Algorithum of machine learning and no need to write code again and again || smash it ||"
        timestamp="3 days ago"
        channel="Shantanu Mishra"
        title="Machine Learning Web App with Streamlit"
        image="https://user-images.githubusercontent.com/36238748/94992649-239c7480-05a9-11eb-882c-b068cf8df924.png"
      />
      <VideoRow
        views="2.6M"
        subs="2M"
        description="This is a Machine Learning Web app which is contain all of the Algorithum of machine learning and no need to write code again and again || smash it ||"
        timestamp="3 days ago"
        channel="Shantanu Mishra"
        title="Machine Learning Web App with Streamlit"
        image="https://user-images.githubusercontent.com/36238748/94992649-239c7480-05a9-11eb-882c-b068cf8df924.png"
        newV
        cc
      />
    </div>
  );
}

export default Search;
