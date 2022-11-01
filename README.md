# BEB-06-SECOND-06

## pm2 를 이용해서 실시간으로 변경사항을 모니터링 해보자.

### 글로벌로 설치
    sudo npm install pm2 -g 
    
### ecosystem.config.js 파일이 생성
    pm2 ecosystem 

### 실행
    sudo pm2 start controller/index.js --watch

### 모니터링 (필수)
    pm2 monit
    
### 죽이기
    pm2 kill

### pm2 실행 옵션 (클러스터)
    --watch : PM2가 실행된 프로젝트의 변경사항을 감지하여 서버를 자동 재시작(reload)

    nodemon과 유사하다, 주로 개발단계에서 즉시 반영되므로 매우 편리하게 사용 할 수 있다.
    만일 watch옵션시에 특정 폴더 경로는 무시해야할 때 --watch --ignore-watch="[dir]/*"

    -i max(코어개수) : Node.js의 싱글 스레드를 보완하기 위한 클러스터(Cluster) 모드

    -i 뒤에 코어의 개수를 입력하거나 max를 쓰면 최대 코어 개수로 클러스터링(Clustering) 된다.

    --name  : 앱 이름 지정
    --max-memory-restart <200MB> : 앱이 리로드 될때 최대의 메모리 지정
    --log <log_path> : 로그 파일 경로 지정
    -- arg1 arg2 arg3 : 스크립트에 추가 인수 전달
    --restart-delay <delay in ms> : 재시작할때의 딜레이 지정
    --time : 로그 남길때 프리픽스로 시간 지정
    --no-autorestart : 재시작 불가하도록 설정
    --cron <cron_pattern> : 주기적으로 강제 재시작이 필요할때 설정 (cron)
