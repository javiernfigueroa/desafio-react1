export function Tags(props) {
  const { backgroundColor, breed } = props;

  const tagStyle = {
    backgroundColor: backgroundColor || '#ccc',
  };

  return <span className="tag" style={tagStyle}>{breed}</span>;
}
