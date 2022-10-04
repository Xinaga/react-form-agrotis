import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: 100px;
  padding-bottom: 100px;

  @media(max-width: 1000px) {
    padding-left: 50px;
    padding-right: 50px;
  }
  @media(max-width: 600px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  
`
export const FormContainer = styled.form`
  display: flex;
  width: 100%;
  max-width: 1280px;
  position: relative;
  flex-direction: column;
  background: white;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.26);
  padding-bottom: 30px;
`
export const FormHeader = styled.div`
  display: flex;
  position: absolute;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  padding: 0 16px;
  top: 0;
  left: 0;
  right: 0;
  background-color: #007a6b;
`
export const FormHeaderTitle = styled.h3`
  font-family: Segoe UI;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: white;
`
export const FormHeaderButton = styled.button`
  font-family: Segoe UI;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
  color: white;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  padding: 0 16px;
  background-color: #007a6b;
  cursor: pointer;
  border-radius: 2px;
  transition: all 300ms ease-in-out;

  &:hover {
    background-color: #009382;
  }
`

export const FormContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 24px 0;
  background-color: white;
  margin-top: 60px;

  @media(max-width: 992px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`

export const ContentLeft = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0px 16px;

  @media(max-width: 992px) {
    
  }
`

export const ContentRight = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0px 16px;
`
export const FormGroupCol = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 16px;
`
export const FormGroupRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  
  @media(max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-gap: 0px;
  }
`
export const DropItemTitle = styled.div`
  display: flex;
  width: 100%;
  color: #000000;
  font-size: 15px;
  margin-top: 0px;
  margin-bottom: 5px;
`
export const DropItemSubtitle = styled.span`
  display: flex;
  align-self: flex-start;
  color: #828D8C;
  font-size: 12px;
`

export const Reset = styled.img`
  display: flex;
  width: 200px;
  align-self: center;
  margin-top: 50px;
  transform: scale(1);
  transition: all 200ms ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`