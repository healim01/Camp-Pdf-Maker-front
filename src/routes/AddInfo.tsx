import React from 'react';
import { Button, TextField, Container, Typography } from '@mui/material';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import theme from '../theme';
import { useRecoilState, useRecoilValue } from 'recoil';
import { UserDept, UserEmail, UserId, UserName } from '../store/atom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Page = styled.div`
  padding: 230px 230px;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export default function Addinfo() {
  const [studentNumber, setStudentNumber] = useRecoilState(UserId); // 리코일 atom 상태로 변경
  const [name, setName] = useRecoilState(UserName); // 리코일 atom 상태로 변경
  const [department, setDepartment] = useRecoilState(UserDept); // 리코일 atom 상태로 변경
  const userEmail = useRecoilValue(UserEmail); // 리코일 atom 상태로 변경

  let history = useHistory();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:8080/api/user`, {
        sid: studentNumber,
        name: name,
        email: userEmail,
        dept: department,
      });
      if (response.status === 200) {
        const sid = response.data.sid; // memberId 받아오기
        setStudentNumber(sid); // 리코일 atom 상태로 변경
        setName(name); // 리코일 atom 상태로 변경
        setDepartment(department); // 리코일 atom 상태로 변경
        history.push('/');
        // memberId를 다음 단계로 넘기거나 원하는 대로 활용할 수 있습니다.
      } else {
        throw new Error('API request failed');
      }
      history.push('/main');
    } catch (error) {
      console.error('Error during login:', error);
    }
    console.log('Submitted:', { studentNumber, name, department });
  };

  return (
    <>
      <Header />
      <Footer />
      <Page>
        <Container component="main" maxWidth="xs">
          <Form>
            <Typography variant="h4">학사 정보 입력</Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                label="학번"
                variant="outlined"
                margin="normal"
                fullWidth
                value={studentNumber}
                onChange={(e) => setStudentNumber(e.target.value)}
                required
              />
              <TextField
                label="이름"
                variant="outlined"
                margin="normal"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <TextField
                label="학과"
                variant="outlined"
                margin="normal"
                fullWidth
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                required
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                style={{
                  marginTop: '20px',
                  backgroundColor: theme.palette.color.main,
                }}
              >
                제출
              </Button>
            </form>
          </Form>
        </Container>
      </Page>
    </>
  );
}
