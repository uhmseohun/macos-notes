import React from "react";
import styled from "styled-components";
import Button from "../components/Button";

type Feature = {
  id: number;
  iconName: string;
  name: string;
  description: string;
};

const features: Feature[] = [
  {
    id: 0,
    iconName: "number",
    name: "태그로 정리",
    description:
      "메모의 어디든지 #여행 등의 태그를 입력하여 메모를 분류할 수 있습니다.",
  },
  {
    id: 1,
    iconName: "at",
    name: "공유 메모의 멘션",
    description:
      "멘션을 사용하여 친구에게 알리고 메모의 중요한 부분을 알려줄 수 있습니다.",
  },
  {
    id: 2,
    iconName: "person.crop.circle.badge",
    name: "활동 보기",
    description:
      "활동 업데이트는 공유 메모에서 어떤 일이 일어나는지 보여줍니다.",
  },
  {
    id: 3,
    iconName: "note",
    name: "어디서나 빠른 메모 생성",
    description:
      "앱을 떠나 있을 때는 Q 단축키를 사용하거나 오른쪽 아래에 있는 핫 코너를 사용하여 빠른 메모를 불러옵니다.",
  },
];

const WhatsNewPage: React.FC = () => {
  return (
    <PageBlock>
      <Title>메모의 새로운 기능</Title>
      <FeatureList>
        {features.map((feature) => (
          <FeatureBlock key={feature.id}>
            <div>
              <Icon
                src={require(`../assets/icon/${feature.iconName}.png`).default}
              />
            </div>
            <FeatureIntroduction>
              <FeatureName>{feature.name}</FeatureName>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureIntroduction>
          </FeatureBlock>
        ))}
      </FeatureList>
      <StyledButton secondary>계속</StyledButton>
    </PageBlock>
  );
};

export default WhatsNewPage;

const PageBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 30px 0;
`;

const Title = styled.h1`
  font-weight: 400;
  font-size: 2.5em;
  margin: 0;
`;

const FeatureList = styled.div`
  margin: auto 0;
  display: flex;
  flex-direction: column;
`;

const FeatureBlock = styled.div`
  display: flex;
  width: 450px;
  align-items: center;

  &:not(:first-of-type) {
    margin-top: 30px;
  }
`;

const FeatureIntroduction = styled.div`
  display: flex;
  flex-direction: column;
`;

const FeatureName = styled.span`
  font-weight: 600;
  font-size: 1.1em;
  margin-bottom: 5px;
`;

const FeatureDescription = styled.span`
  color: #929292;
  word-break: keep-all;
`;

const Icon = styled.img`
  margin-right: 30px;
  width: 2.3em;
`;

const StyledButton = styled(Button)`
  padding: 3px 4em;
  font-size: 1em;
  box-shadow: none;
`;
