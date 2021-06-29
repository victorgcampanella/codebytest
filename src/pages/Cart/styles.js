import styled from 'styled-components'

export const ContainerCart = styled.div`
  width: 500px;

  border-radius: 15px;

  background-color: #FFFFFF;
`
export const ContentCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  .title-cart {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;

    border-bottom: 2px solid #DFDFDF;

    h1 {
      margin: 20px 0px; 

      font-size: 24px;
    }
  }
`

export const ProductsCart = styled.div`
  width: 100%;

  border-bottom: 2px solid #DFDFDF;

  ul {
    li {
      display: flex;
      align-items: center;

      margin: 20px;

      img {
        width: 120px;
        border: 2px solid #DFDFDF;
      }

      div {
        width: 100%;

        margin-left: 30px;

        h1 {
          margin-bottom: 10px;

          font-size: 18px;
        }

        span {
          font-size: 16px;
          font-weight: 500;
        }
      }
    }
  }
`

export const TotalCart = styled.div`
  width: 100%;

  padding: 30px 20px;
  border-bottom: 2px solid #DFDFDF;

  >div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1 {
      font-size: 24px;
    }

    span {
      font-size: 24px;
      font-weight: bold;
    }
  }

  .free-shipping {
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 100%;
      margin: 20px 30px 0px 30px;

      background: #CAFEC6;
      padding: 10px 20px;
      border-radius: 20px;

      font-size: 16px;
      color: #2F9528;
    }
  }
`

export const ButtonCheckout = styled.div`
  width: 100%;

  padding: 25px;
  
  button {
    width: 100%;

    background-color: #3770F2;
    padding: 20px;

    font-size: 24px;
    font-weight: bold;
    color: #FFFFFF;
    border: 0;
    border-radius: 10px;
  }
`