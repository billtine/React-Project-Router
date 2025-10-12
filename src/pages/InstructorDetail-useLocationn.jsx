import { useParams, useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';


const InstructorDetail = () => {

  // ! Linkteki parametreyi almak icin useParams Hook'u kullanılabilir.
  const { id } = useParams();

  const navigate = useNavigate()
  const location = useLocation();
  const inst = location.state;

  
  return (
    <div className='container text-center'>
      <h3>{inst.name}</h3>
      <img 
        // src={`https://i.pravatar.cc/300/${id}`} 
        src={`https://i.pravatar.cc/300?img=${id}`}
        alt="" 
      />
      <h4>{inst.email}</h4>
      <h4>{inst.phone}</h4>

      <div>
        <button 
          className='btn btn-success me-2'
          onClick={() => navigate('/')} // Home'a git..
          >Home
        </button>
        <button 
          className='btn btn-warning me-2'
          onClick={() => navigate(-1)} // Bir önceki sayfaya git..
          >Go Back
          </button>
      </div>

    </div>
  )
}

export default InstructorDetail;
