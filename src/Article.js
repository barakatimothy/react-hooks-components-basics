import React from "react";

function Article() {
  return (
    <div>Dear Reader: Bjarne Stroustrup has the perfect lecture oration.</div>
  );
}
export default Article;

class Comment extends React.Component {
  render() {
    return <div>Naturally, I agree with this article.</div>;
  }
}