package lecture.spring_boot_mybatis.mapper;

import lecture.spring_boot_mybatis.domain.Board;
import lecture.spring_boot_mybatis.dto.BoardCreateDTO;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Update;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper // Spring 에게 해당 interface가 매퍼 역할을 하는 interface임을 알림.
public interface BoardMapper {

//    @Select("SELECT * FROM board")
    List<Board> retrieveAll();

//    @Insert("INSERT INTO board(title, content, writer) VALUES(#{title}, #{content}, #{writer}, CURRENT_TIMESTAMP)")
    void insertBoard(BoardCreateDTO board);

//    @Update("UPDATE board SET title = #{title}, content = #{content}, writer = #{writer} WHERE id = #{id}")
    void updateBoard(Board board);

//    @Delete("DELETE FROM board WHERE id = #{id}")
    void deleteBoard(int id);
}
