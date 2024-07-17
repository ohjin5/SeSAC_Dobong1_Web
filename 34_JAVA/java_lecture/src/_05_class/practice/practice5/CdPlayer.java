package _05_class.practice.practice5;

// CdPlayer 클래스 정의
class CdPlayer implements Music {
    @Override
    public void play() {
        System.out.println("CD 플레이어에서 '아이유 꽃갈피' 앨범을 재생합니다.");
    }

    @Override
    public void stop() {
        System.out.println("CD 플레이어에서 '아이유 꽃갈피' 앨범을 중지합니다.");
    }
}