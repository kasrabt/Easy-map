function Easymap({ data, renderItem }) {
  const mapData = data.map((item, index) => (
    <Fragment key={index}>{renderItem}</Fragment>
  ));
  return mapData;
}

module.export = Easymap;
