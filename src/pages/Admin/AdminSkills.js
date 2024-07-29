import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ShowLoading, HideLoading, ReloadData } from '../../redux/rootSlice';
import axios from 'axios';
import { message } from 'antd';

function AdminSkills() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { skills } = portfolioData;
  
  const [showAddEditModal, setShowAddEditModal] = React.useState(false);
  const [selectedSkillForEdit, setSelectedSkillForEdit] = React.useState(null);
  const [skillData, setSkillData] = React.useState({ skillName: '', skillImage: '' });

  const onFinish = async () => {
    try {
      dispatch(ShowLoading());
      let response;
      if (selectedSkillForEdit) {
        response = await axios.post("https://mern-portfolio-backend-unnf.onrender.com/api/portfolio/update-skill", {
          ...skillData,
          _id: selectedSkillForEdit._id,
        });
      } else {
        console.log(skillData)
        response = await axios.post('https://mern-portfolio-backend-unnf.onrender.com/api/portfolio/add-skill', skillData);
      }

      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        setShowAddEditModal(false);
        setSelectedSkillForEdit(null);
        setSkillData({ skillName: '', skillImage: '' });
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const onDelete = async (skill) => {
    try {
      const response = await axios.post('https://mern-portfolio-backend-unnf.onrender.com/api/portfolio/delete-skill', {
        _id: skill._id,
      });
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  return (
    <div>
      <div className='flex justify-end'>
        <button
          className='bg-primary px-5 py-2 text-white mb-5'
          onClick={() => {
            setSelectedSkillForEdit(null);
            setSkillData({ skillName: '', skillImage: '' });
            setShowAddEditModal(true);
          }}
        >
          Add Skill
        </button>
      </div>

      <div className='grid lg:grid-cols-4 sm:grid-cols-1 gap-5 w-full'>
        {skills.map((skill) => (
          <div key={skill._id} className='shadow border p-5 border-gray-400'>
            <img src={skill.skillImage} alt={skill.skillName} className='w-16 h-16 mx-auto mb-4' />
            <h1 className='text-secondary text-xl font-bold'>{skill.skillName}</h1>
            <div className='flex justify-end gap-4 mt-5'>
              <button
                className='bg-secondary text-white px-5 py-2'
                onClick={() => onDelete(skill)}
              >
                Delete
              </button>
              <button
                className='bg-primary text-white px-5 py-2'
                onClick={() => {
                  setSelectedSkillForEdit(skill);
                  setSkillData(skill);
                  setShowAddEditModal(true);
                }}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      {showAddEditModal && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
          <div className='bg-white p-5 rounded-lg w-1/3'>
            <h2 className='text-xl font-bold mb-4'>
              {selectedSkillForEdit ? 'Edit Skill' : 'Add Skill'}
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onFinish();
              }}
              className='flex flex-col space-y-4'
            >
              <div>
                <label className='block mb-1'>Skill Name</label>
                <input
                  type='text'
                  value={skillData.skillName}
                  onChange={(e) => setSkillData({ ...skillData, skillName: e.target.value })}
                  className='w-full px-4 py-2 border rounded-lg'
                  required
                />
              </div>
              <div>
                <label className='block mb-1'>Image URL</label>
                <input
                  type='text'
                  value={skillData.skillImage}
                  onChange={(e) => setSkillData({ ...skillData, skillImage: e.target.value })}
                  className='w-full px-4 py-2 border rounded-lg'
                  required
                />
              </div>
              <div className='flex justify-end space-x-4'>
                <button
                  type='button'
                  className='border border-primary text-primary px-5 py-2 rounded-lg'
                  onClick={() => setShowAddEditModal(false)}
                >
                  Cancel
                </button>
                <button
                  type='submit'
                  className='bg-primary text-white px-5 py-2 rounded-lg'
                >
                  {selectedSkillForEdit ? 'Update' : 'Add'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminSkills;
