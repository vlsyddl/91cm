package com.nineone.nocm.repository;

import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.nineone.nocm.domain.TaskList;

@Repository
public class TaskListRepositoryImpl implements TaskListRepository{
	
	@Autowired
    private SqlSessionTemplate sqlSession;

	private String namespace = "com.nineone.nocm.mapper.tasklist";

	@Override
	public int insertTaskList(TaskList taskList) {
		return sqlSession.insert(namespace + ".insertTaskList", taskList);
	}

	@Override
	public int deleteTaskList(int id) {
		return sqlSession.delete(namespace + ".deleteTaskList", id);
	}

	@Override
	public int updateTaskListName(TaskList taskList) {
		return sqlSession.delete(namespace + ".updateTaskListName",taskList);
	}

	@Override
	public List<TaskList> getTaskList(int channel_id) {
		return sqlSession.selectList(namespace + ".getTaskList", channel_id);
	}

	@Override
	public int updateTaskListPosition(Map<String, Object> map) {
		return sqlSession.update(namespace + ".updateTaskListPosition",map);
	}

//	@Override
//	public int initTaskListPosition(Map<String, Object> map) {
//		// TODO Auto-generated method stub
//		return sqlSession.update(namespace + ".initTaskListPosition",map);
//	}

	@Override
	public int moveTaskListPosition(Map<String, Object> map) {
		System.out.println(map.get("isUp"));
		return sqlSession.update(namespace + ".moveTaskListPosition",map);
	}

	@Override
	public int updateTaskPositionByDelete(int position) {
		return sqlSession.update(namespace + ".updateTaskPositionByDelete",position);
	}

}
