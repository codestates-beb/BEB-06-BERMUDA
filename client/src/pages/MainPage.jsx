import { React, useState } from "react";
import ImgSlider from '../components/ImgSlider'

function MainPage() {
  const [imgIndex, setImgIndex] = useState("one");
  const [pageIndex ,setPageIndex ] = useState(0);
  const [ rankingSelect , setrankingSelect ] = useState("popular");

  const onMouseOverImg = (e) => {
    let value = e.currentTarget.attributes.value.value;
    setImgIndex(value);
  }

  const onClickRaking = (e) => {
    let value = e.currentTarget.attributes.value.value;
    setrankingSelect(value);
  }

  const prevPage = () =>{ 
    if (pageIndex == 0) {
      return;
    } else {
      setPageIndex(pageIndex - 1);
    }
  }

  const nextPage = () =>{ 
    if (pageIndex == 3) {
      return;
    } else {
      setPageIndex(pageIndex + 1);
    }
  }

  const pageText = [ "zero" , "one" , "two" , "three"  ];

    return (
      <div className="main_box" >
        <div className="webtown_slider" >
          <div className="text_box"  >
            <div className="today_text" >오늘의</div>
            <div className="today_text color" >웹툰</div>
            <div className="today_text short" >10월 28일 금요일</div>
          </div>
          <div className={"img_box " + imgIndex  }></div>
          
          <div className="select_webtoon_box" > 
            <div className="arrow_left_box"  onClick={prevPage} ><div className="arrow_left" ></div> </div >
            <div className="select_box" >
              <div className={"overflow_box " + pageText[pageIndex] }  >
                <div value={"zero"}  onMouseOver={onMouseOverImg} className="select_box_img">
                  <div className="best_preivew_img" >M</div>
                  <div className="text_b" >
                    <div className="privew_bold">웹툰최강자전</div>
                    <div className="privew_s"> 바로 확인하기</div>
                  </div>
                </div>
                <div value={"one"}  onMouseOver={onMouseOverImg} className="select_box_img one"></div>
                <div value={"two"}  onMouseOver={onMouseOverImg} className="select_box_img two"></div>
                <div value={"three"}  onMouseOver={onMouseOverImg} className="select_box_img three"></div>
                <div value={"four"}  onMouseOver={onMouseOverImg} className="select_box_img four"></div>
                <div value={"five"}  onMouseOver={onMouseOverImg} className="select_box_img five"></div>
                <div value={"six"}  onMouseOver={onMouseOverImg} className="select_box_img six"></div>
              </div>
            </div>
            <div className="arrow_right_box" onClick={nextPage} ><div className="arrow_right" ></div>  </div >
          </div> 
        </div>
        <div className="recommend_new_webtown" >
          <div className="sub_title"  ><span style={{ color:"#1ed874" }} >새로운</span> 베스트 도전만화</div>
          <div className="new_webtown_img" ></div>
          <div className="new_webtown_title" >무적! 호랑권!</div>
          <div className="new_webtown_text" > 오랜 시간 공들인 호랑권을 드디어 완성시킨 남철두. 그리고 그의 앞에 괴롭힘을 받고있는 소년 도현이 나타났다. 소년의 . . .</div>
        </div>

        <div>
          < ImgSlider/>
          <div className="webtown_ranking_box" >
            <div className="ranking_webtown_title" >최강자전 인기 웹툰</div>
            <div className="ranking_select" >
              <div  onClick={onClickRaking} value={"popular"}  className={"ranking_selct_text" + ( rankingSelect == "popular" ? " on" : "") } style={{ borderRight : "1px solid #ccc" }} > 추천 급상승 </div>
              <div  onClick={onClickRaking} value={"ranking"} className={"ranking_selct_text" + ( rankingSelect == "ranking" ? " on" : "") }  > 랭킹순 </div>
            </div>

            {rankingSelect == "popular" ? (
              <div className="ranking_box" >
                <div><div className="raking_num" >1.</div> <div className="raking_name" >앵무살수 - </div>   <div className="recommend_img" ></div> 1132개 </div>
                <div><div className="raking_num" >2.</div> <div className="raking_name" >순정빌런 - </div>   <div className="recommend_img" ></div> 920개</div>
                <div><div className="raking_num" >3.</div> <div className="raking_name" >쿠베라 -   </div>   <div className="recommend_img" ></div> 915개 </div>
                <div><div className="raking_num" >4.</div> <div className="raking_name" >잔불의기사 -</div>   <div className="recommend_img" ></div> 827개 </div>
                <div> <div className="raking_num" >5.</div> <div className="raking_name" >인생존망 - </div> <div className="recommend_img" ></div> 811개 </div>
                <div><div className="raking_num" >6.</div> <div className="raking_name" >이제 곧 죽습니다 - </div> <div className="recommend_img" ></div> 772개 </div>
                <div><div className="raking_num" >7.</div> <div className="raking_name" >심연의 하늘 - </div> <div className="recommend_img" ></div> 764개 </div>
                <div><div className="raking_num" >8.</div> <div className="raking_name" >방백남녀 - </div> <div className="recommend_img" ></div> 742개 </div>
                <div><div className="raking_num" >9.</div> <div className="raking_name" >물위의 우리 - </div> <div className="recommend_img" ></div> 665개 </div>
                <div> <div className="raking_num" >10.</div> <div className="raking_name" >연애혁명 - </div> <div className="recommend_img" ></div> 664개 </div>
              </div>
            ) : (
              <div className="ranking_box">
                <div className="raking_num" >1</div> <div className="raking_name" >앵무살수</div>
              </div>
            )}

          </div>
        </div>
        
      </div>

      
    );
  }
  
  export default MainPage;
  