const CarInfo = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <div style={{ width: "370px", display: "flex", justifyContent: "space-between" }}>
        <span>이름</span>
        <span>sorento</span>
      </div>
      <div style={{ width: "370px", display: "flex", justifyContent: "space-between" }}>
        <span>트림</span>
        <span>가솔린 터보 2.5 4WD 트렌디</span>
      </div>
      <div style={{ width: "370px", display: "flex", justifyContent: "space-between" }}>
        <span>차량번호</span>
        <span>123가0987</span>
      </div>
      <div style={{ width: "370px", display: "flex", justifyContent: "space-between" }}>
        <span>차량등록일</span>
        <span>2020년 8월 30일(19년형)</span>
      </div>
      <div style={{ width: "370px", display: "flex", justifyContent: "space-between" }}>
        <span>주행거리</span>
        <span>34,567km</span>
      </div>
    </div>
  );
};

export default CarInfo;
