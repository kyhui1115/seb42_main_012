function GymDetailMainImg({ gymImage }) {
  return (
    <>
      <div className="h-48 w-90">
        <img src={gymImage} alt="헬스장 사진" className="w-full h-full" />
      </div>
    </>
  );
}

export default GymDetailMainImg;
