import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function ImgSlider() {

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className="arrow_left s"
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className="arrow_right s"
            onClick={onClick}
          />
        );
      }


    const settings = {
      infinite: true,
      slidesToShow: 2,
      rows: 2,
      autoplay: true,
      autoplaySpeed: 3500,
      pauseOnHover: true,
      nextArrow: < SamplePrevArrow/>,
      prevArrow: < SampleNextArrow/>
    };

    return (
      <div className="webtoon_slider" >
        <div className="slider_h1" > 최강자전 <span  style={{ color:"#1ed874" }} > 웹툰 </span> 모아보기 </div>
        <Slider {...settings}>
        <div className="slider-card" >
          <div className="overflow_img">
            <img className="slider-card-image on1" />
          </div> 
          <div className="sider_title" >물위의 우리</div>
          <div className="sider_sub_text">뱁새 / 왈패</div>
          <div className="sider_sub_text2">수차례의 지각변동 이후 해수면이 급격히 상승한 지구. 딸 한별이에게 더 넓은 세상을 보여주고 싶은 호주는 한별이와 고향으로 향한다.</div>
        </div>
        <div className="slider-card" >
          <div className="overflow_img">
            <img className="slider-card-image on3" />
          </div>
          <div className="sider_title" >나노 마신</div>
          <div className="sider_sub_text">현절무 / 금강불괴 / 한중월야</div>
          <div className="sider_sub_text2">갖은 멸시와 목숨의 위협을 받던 마교의 사생아 천여운, 미래에서 나타난 후손이 천여운의 몸에 나노 머신을 주입한 후 그의 인생이 송두리째 바뀐다.</div>

        </div>
        <div className="slider-card" >
        <div className="overflow_img">
          <img className="slider-card-image on2" />
        </div>
          <div className="sider_title" >연애혁명</div>
          <div className="sider_sub_text">232</div>
          <div className="sider_sub_text2">평범하면서 금사빠인 고등학생 순정남 공주영은 까칠하고 차가운 여학생 왕자림을 보고 사랑에 빠져버린다.</div>
        </div>

        <div className="slider-card" >
        <div className="overflow_img">
          <img className="slider-card-image on4" />
        </div>
          <div className="sider_title" >순정빌런</div>
          <div className="sider_sub_text">세윤</div>
          <div className="sider_sub_text2">특수능력을 가진 범죄자를 상대하기 위한 특수경찰이 존재하는 세계. 평화로운 나날을 보내던 최강의 특수경찰 '한도령'에게 감당할 수 없는 빌런이 찾아온다! </div>
        </div>

        <div className="slider-card" >
          <div className="overflow_img">
            <img className="slider-card-image on5" />
          </div>
          <div className="sider_title" >별이삼샵</div>
          <div className="sider_sub_text">혀노</div>
          <div className="sider_sub_text2">특ㄱ나니? 발신자 제한번호로 그녀에게 마음을 전했던 이야기.'남과여' 혀노 작가가 담아낸 촌스럽지만 풋풋했던 2000년대 그 시절. </div>
        </div>
        <div className="slider-card" >
        <div className="overflow_img">
          <img className="slider-card-image on6" />
        </div>
          <div className="sider_title" >별이삼샵</div>
          <div className="sider_sub_text">혀노</div>
          <div className="sider_sub_text2">특ㄱ나니? 발신자 제한번호로 그녀에게 마음을 전했던 이야기.'남과여' 혀노 작가가 담아낸 촌스럽지만 풋풋했던 2000년대 그 시절. </div>
        </div>
        <div className="slider-card" >
        <div className="overflow_img">
          <img className="slider-card-image on7" />
        </div>
          <div className="sider_title" >일렉시드</div>
          <div className="sider_sub_text">손제호 / 제나</div>
          <div className="sider_sub_text2"> 노블레스 손제호 작가와 소녀더와일즈 제나 작가가 만났다! 고양이 몸에 깃든 각성자 카이든과 각성능력을 숨겨온 고등학생 지우 러블리 2인조의 액션 판타지 </div>
        </div>
        <div className="slider-card" >
          <div className="overflow_img">
            <img className="slider-card-image on8" />
          </div>
          <div className="sider_title" >빌드업</div>
          <div className="sider_sub_text">911</div>
          <div className="sider_sub_text2"> 축구덕후지만 볼보이만 5년째?! 빵셔틀 강마루의 열혈청춘 축구드라마 </div>
        </div>

        <div className="slider-card" >
          <div className="overflow_img">
            <img className="slider-card-image on9" />
          </div>
          <div className="sider_title" >신도림</div>
          <div className="sider_sub_text">오세형</div>
          <div className="sider_sub_text2">세상이 무너지고 세워진 지하도시 신도림 그곳에 들어가지 못하고 생존한 소년들이 지하도시의 비밀을 파헤친다</div>

        </div>
        <div className="slider-card" >
          <div className="overflow_img">
            <img className="slider-card-image on10" />
          </div>
          <div className="sider_title" >방백남녀</div>
          <div className="sider_sub_text">고태호</div>
          <div className="sider_sub_text2"> 모든 게 다른 두 남녀 친구가 될 수 있을까?</div>

        </div>
        <div className="slider-card" >
          <div className="overflow_img">
            <img className="slider-card-image on11" />
          </div>
          <div className="sider_title" >심연의 하늘</div>
          <div className="sider_sub_text">윤인완 / 김선희</div>
          <div className="sider_sub_text2"> 한치 앞도 보이지 않는 어둠 속 서울. 도대체 무슨 일이 벌어진 걸까?</div>

        </div>
        <div className="slider-card" >
          <div className="overflow_img">
            <img className="slider-card-image on12" />
          </div>
          <div className="sider_title" >이제 곧 죽습니다</div>
          <div className="sider_sub_text">이원식 / 꿀찬</div>
          <div className="sider_sub_text2"> 아무래도 이번 생은 실패다. 죽음과 함께 시작된 13번의 새로운 삶 </div>

        </div>

        <div className="slider-card" >
           <div className="overflow_img">
            <img className="slider-card-image on13" />
           </div>
           <div className="sider_title" >인생존망</div>
          <div className="sider_sub_text">박태준 / 전선욱</div>
          <div className="sider_sub_text2"> 학교 다닐때 날 지독하게 괴롭힌 너 때문에 난 인생이 망했어. 그런데 왜 넌 안 망하고 오히려 더 떵떵거리며 사는거야? 너도 한번 내가 되어서 너한테 똑같이 당해봐!! </div>

        </div>
        <div className="slider-card" >
          <div className="overflow_img">
            <img className="slider-card-image on14" />
          </div>
          <div className="sider_title" >쿠베라</div>
          <div className="sider_sub_text">카레곰</div>
          <div className="sider_sub_text2"> 신의 이름을 가진 소녀 쿠베라 리즈. 15세 생일에 외출에서 돌아오다가 초토화되어버린 마을을 목격하게 되는데..! 신, 수라, 마법사들 사이에서 펼쳐지는 소속불명 장르 혼합 판타지.</div>

        </div>
        <div className="slider-card" >
          <div className="overflow_img">
            <img className="slider-card-image on15" />
          </div>
          <div className="sider_title" >잔불의 기사</div>
          <div className="sider_sub_text">환댕</div>
          <div className="sider_sub_text2"> 유일한 가족이자, 최고의 기사 유망주였던 쌍둥이 동생이 살해당했다. 천재적이었던 동생과는 달리 무예에 재능이 전혀 없지만, 동생의 복수를 위해 '강함'을 연기하기로 결심했다. 약해빠진 나는 복수에 성공할 수 있을까. </div>

        </div>
        <div className="slider-card" >
          <div className="overflow_img">
            <img className="slider-card-image on16" />
          </div>
          <div className="sider_title" >앵무살수</div>
          <div className="sider_sub_text">김성진</div>
          <div className="sider_sub_text2"> 평범한 뱃사공으로 살고 있는 노소하. 하지만 그의 정체는 전설적인 구파검법의 후계자다. 이제 진시황이 남긴 비서 선근경을 향한 살수행이 시작된다. </div>

        </div>


        </Slider>
      </div>
    );
  
}

export default ImgSlider;