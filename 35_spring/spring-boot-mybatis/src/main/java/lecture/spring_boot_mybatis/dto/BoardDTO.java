package lecture.spring_boot_mybatis.dto;

import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;

@Getter
@Setter
public class BoardDTO {
    private int id;
    private String title;
    private String content;
    private String writer;
    private Timestamp registered;

    // Getters and Setters
}

class Cosmetic {                    // 클래스 이름
    private String modelName;  // 필드
    private int modelPrice;     // 필드

    Cosmetic(String modelName, int modelPrice) { // 생성자
        this.modelName = modelName;
        this.modelPrice = modelPrice;
    }

    public String getModel() { // 메소드
        return this.modelPrice + "원 " + this.modelName + " " ;
    }
}

