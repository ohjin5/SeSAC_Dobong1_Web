package lecture.spring_boot_mybatis.service;

import lecture.spring_boot_mybatis.domain.Board;
import lecture.spring_boot_mybatis.dto.BoardCreateDTO;
import lecture.spring_boot_mybatis.dto.BoardDTO;
import lecture.spring_boot_mybatis.mapper.BoardMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BoardService {
    @Autowired
    private BoardMapper boardMapper;

    public List<BoardDTO> getBoardList() {
        List<Board> result = boardMapper.retrieveAll();
        List<BoardDTO> boards = new ArrayList<>();

        for (int i = 0; i < result.size(); i++) {
            BoardDTO boardDTO = new BoardDTO();
            boardDTO.setId(result.get(i).getId());
            boardDTO.setTitle(result.get(i).getTitle());
            boardDTO.setContent(result.get(i).getContent());
            boardDTO.setWriter(result.get(i).getWriter());
            boardDTO.setRegistered(result.get(i).getRegistered());

            boards.add(boardDTO);
        }

        return boards;
    }

    public void insertBoard(BoardCreateDTO board) {
        boardMapper.insertBoard(board);
    }

    public void updateBoard(int id, BoardCreateDTO board) {
        Board updateBoard = new Board();

        updateBoard.setId(id);
        updateBoard.setTitle(board.getTitle());
        updateBoard.setContent(board.getContent());
        updateBoard.setWriter(board.getWriter());

        boardMapper.updateBoard(updateBoard);
    }

    public void deleteBoard(int id) {
        boardMapper.deleteBoard(id);
    }
}
