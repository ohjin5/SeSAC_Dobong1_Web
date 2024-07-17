package _05_class.f_interface;

public class Television implements RemoteControl {

    private int volume;

    public void turnOn(){
        System.out.println("TV를 켭니다.");
    }

    public void turnOff(){
        System.out.println("TV를 끕니다.");
    }
    public void setVolume(int v){
        if(v>RemoteControl.MAX_VOLUME){
            volume=RemoteControl.MAX_VOLUME;
        } else if (v<RemoteControl.MIN_VALUE) {
            volume=RemoteControl.MIN_VALUE;
        }else{
    //            volume=v;
    this.volume=v;
        }
        System.out.println("현재 TV의 volume: "+volume);
    }
}
