package lecture.spring_boot_mybatis.controller;

import lecture.spring_boot_mybatis.dto.BoardCreateDTO;
import lecture.spring_boot_mybatis.dto.BoardDTO;
import lecture.spring_boot_mybatis.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/board")
public class BoardController {
    @Autowired
    private BoardService boardService;

    @GetMapping("")
    @ResponseBody
    public List<BoardDTO> getBoards() {
        return boardService.getBoardList();
    }

    @PostMapping("")
    @ResponseBody
    public Map<String, Boolean> insertBoard(
            @ModelAttribute BoardCreateDTO board
    ) {
        boardService.insertBoard(board);

        Map<String, Boolean> result = new HashMap<>();
        result.put("result", true);
        return result;
    }

    @PatchMapping("/{id}")
    @ResponseBody
    public Map<String, Boolean> patchBoard(
            @PathVariable int id,
            @RequestBody BoardCreateDTO board
    ) {
        Map<String, Boolean> result = new HashMap<>();

        try {
            boardService.updateBoard(id, board);
            result.put("result", true);
        } catch (Exception e) {
            result.put("result", false);
        }

        return result;
    }

    @DeleteMapping("/{id}")
    @ResponseBody
    public Map<String, Boolean> deleteBoard(@PathVariable int id) {
        Map<String, Boolean> result = new HashMap<>();

        try {
            boardService.deleteBoard(id);
            result.put("result", true);
        } catch (Exception e) {
            result.put("result", false);
        }

        return result;
    }
}
