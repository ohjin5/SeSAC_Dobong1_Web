package _05_class.practice.practice5;

// MusicPlayer 클래스 정의
public class MusicEx {
    public static void main(String[] args) {
        // Mp3Player 객체 생성
        Mp3Player mp3Player = new Mp3Player();
        // CdPlayer 객체 생성
        CdPlayer cdPlayer = new CdPlayer();
        System.out.println("=====MP3 Player=====");
        // 음악 재생 시작
        playMusic(mp3Player);
        playMusic(cdPlayer);
        System.out.println("=====CD Player=====");
        // 음악 재생 중지
        stopMusic(mp3Player);
        stopMusic(cdPlayer);
    }

    // 음악 재생 메소드
    static void playMusic(Music musicPlayer) {
        musicPlayer.play();
    }

    // 음악 중지 메소드
    static void stopMusic(Music musicPlayer) {
        musicPlayer.stop();
    }
}
