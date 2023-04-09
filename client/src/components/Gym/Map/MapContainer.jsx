import { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

function GymMapContainer({ gymAddress }) {
  const { kakao } = window;
  const [map, setMap] = useState({ Ma: 0, La: 0 });

  useEffect(() => {
    // 주소-좌표 변환 객체를 생성
    const geocoder = new kakao.maps.services.Geocoder();

    // 주소로 좌표를 검색
    geocoder.addressSearch(gymAddress, (result, status) => {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        // 위도, 경도를 가져온다.
        const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        setMap(coords);
      }
    });
  }, [gymAddress]);

  return (
    <Map center={{ lat: map.Ma, lng: map.La }} className="w-full h-64 mt-1">
      {/* 주소를 지도에 표시 */}
      <MapMarker position={{ lat: map.Ma, lng: map.La }} />
    </Map>
  );
}

export default GymMapContainer;
