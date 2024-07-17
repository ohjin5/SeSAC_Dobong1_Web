package _05_class.practice.practice5;

// Mp3Player 클래스 정의
class Mp3Player implements Music {
    @Override
    public void play() {
        System.out.println("Mp3 플레이어에서 '아이유 블루밍' 음악을 재생합니다.");
    }

    @Override
    public void stop() {
        System.out.println("Mp3 플레이어에서 '아이유 블루밍' 음악을 정지합니다.");
    }
}