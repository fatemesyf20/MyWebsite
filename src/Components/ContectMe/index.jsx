import React from "react";
import {
  Column1,
  Column2,
  ContectMeRow,
  ContectMeWrapper,
  ContectMeContainer,
  GitI,
  InsI,
  GmailI,
  TelegramI,
  LinkdinI,
} from "./ContectMeElements";

function ContectMe() {
  return (
    <>
      <ContectMeContainer id="contactMe">
        <ContectMeWrapper>
          <ContectMeRow>
            <Column1>
              <a href="https://github.com/fatemesyf20">
                <GitI />
              </a>
              <a href="https://www.linkedin.com/in/fateme-seyfolahi-6a8680237">
                <LinkdinI />
              </a>
            </Column1>
            <Column2>
              <a href="mailto:fatemesyf22@gmail.com">
                <GmailI />
              </a>
              <a href="https://t.me/FatemeSyf_dev">
                <TelegramI />
              </a>
              <a href="https://instagram.com/fateme_syf1">
                <InsI />
              </a>
            </Column2>
          </ContectMeRow>
        </ContectMeWrapper>
      </ContectMeContainer>
    </>
  );
}

export default ContectMe;
