import {SmileOutlined} from '@ant-design/icons';

function Footer() {
  return (
    <div style={{
      // 객체 -->  {키:값}의 형태 
      height: '80px',
      backgroundColor : "#001529",
      color : "#FFF",
      display : "grid",
      alignItems :"center",
      justifyContent : "center",
      fontSize : "1rem",
    }}>
      <p> HIMEDIA <SmileOutlined /></p> 
    </div>
  );
};

export default Footer;