import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends React.Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={e => this.props.selectSong(song)} // call action creator funciton so it gets dispatched to redux
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

// wire up state to our component so we can use it as props
const mapStateToProps = state => {
  return { songs: state.songs };
};

export default connect(
  mapStateToProps,
  { selectSong } // pass action cerator function
)(SongList);
