const Sorento = () => {
  const car = {
    name: "sorento",
    trim: "가솔린 터보 2.5 4WD 트렌디",
    carNum: "123가0987",
    carRegistrationDate: "2020년 8월 30일(19년형)",
    mileage: "34,567km",
  };

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "370px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>이름</span>
        <span>{car.name}</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>트림</span>
        <span>{car.trim}</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>차량번호</span>
        <span>{car.carNum}</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>차량등록일</span>
        <span>{car.carRegistrationDate}</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>주행거리</span>
        <span>{car.mileage}</span>
      </div>
    </section>
  );
};

export default Sorento;
