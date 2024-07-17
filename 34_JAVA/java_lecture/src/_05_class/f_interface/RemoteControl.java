package _05_class.f_interface;

public interface RemoteControl {

    public void turnOn();

    public  void turnOff();

    public  void setVolume(int volume);

    int MAX_VOLUME = 10;

    static final int MIN_VALUE=0;
}
