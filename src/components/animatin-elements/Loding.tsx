import styled from "styled-components";

function Loading() {
  return (
    <Style>
      <div className="box-pac-man">
        <div className="pac-man" />
      </div>
    </Style>
  );
}

const Style = styled.div`
  .box-pac-man {
    padding: 10px 0;
  }
  .pac-man {
    border-radius: 50%;
    border-radius: 100em 100em 0 0;
    background: #f00;
    margin-top: -12.5px;
    transform-origin: bottom;
    -webkit-animation: eating-top 0.5s infinite;
    animation: eating-top 0.5s infinite;
  }
  .pac-man,
  .pac-man::before {
    width: 30px;
    height: calc(30px / 2);
    background: #fed75a;
  }
  .pac-man::before {
    content: "";
    display: block;
    margin-top: calc(30px / 2);
    position: absolute;
    transform-origin: top;
    border-radius: 0 0 100em 100em;
    transform: rotate(80deg);
    -webkit-animation: eating-bottom 0.5s infinite;
    animation: eating-bottom 0.5s infinite;
  }
  .pac-man::after {
    position: absolute;
    border-radius: 100em;
    content: "";
    display: block;
    height: 15px;
    width: 15px;
    margin-top: calc((40px / 2) - 10px);
    margin-left: calc((40px / 2) - 10px);
    transform-origin: center;
    -webkit-animation: center 0.5s infinite, ball 0.5s -0.33s infinite linear;
    animation: center 0.5s infinite, ball 0.5s -0.33s infinite linear;
  }
  @-webkit-keyframes eating-top {
    0% {
      transform: rotate(-40deg);
    }
    50% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-40deg);
    }
  }
  @keyframes eating-top {
    0% {
      transform: rotate(-40deg);
    }
    50% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-40deg);
    }
  }
  @-webkit-keyframes eating-bottom {
    0% {
      transform: rotate(80deg);
    }
    50% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(80deg);
    }
  }
  @keyframes eating-bottom {
    0% {
      transform: rotate(80deg);
    }
    50% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(80deg);
    }
  }
  @-webkit-keyframes center {
    0% {
      transform: rotate(40deg);
    }
    50% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(40deg);
    }
  }
  @keyframes center {
    0% {
      transform: rotate(40deg);
    }
    50% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(40deg);
    }
  }
  @-webkit-keyframes ball {
    0% {
      opacity: 0.7;
      box-shadow: 70px 0 0 0 #fed75a, 120px 0 0 0 #fed75a, 170px 0 0 0 #fed75a,
        220px 0 0 0 #fed75a;
    }
    100% {
      box-shadow: 20px 0 0 0 #fed75a, 70px 0 0 0 #fed75a, 120px 0 0 0 #fed75a,
        170px 0 0 0 #fed75a;
    }
  }
  @keyframes ball {
    0% {
      opacity: 0.7;
      box-shadow: 70px 0 0 0 #fed75a, 120px 0 0 0 #fed75a, 170px 0 0 0 #fed75a,
        220px 0 0 0 #fed75a;
    }
    100% {
      box-shadow: 20px 0 0 0 #fed75a, 70px 0 0 0 #fed75a, 120px 0 0 0 #fed75a,
        170px 0 0 0 #fed75a;
    }
  }
`;

export default Loading;
