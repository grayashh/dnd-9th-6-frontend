import type { Meta, StoryObj } from '@storybook/react';
import { CoverCard, OutlinedCard, LandScapeCard } from 'components/Card';
import { Card } from './card';

const meta = {
  title: 'Classcope/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;

export const CoverCardExample: StoryObj<typeof CoverCard> = {
  args: {
    강사: '김코딩',
    타이틀: '김코딩의 자바스크립트 강의',
    가격: '100,000',
    플랫폼: 'fastcampus',
    이미지:
      'https://storage.googleapis.com/static.fastcampus.co.kr/prod/uploads/202308/132817-865/thumb--1-.jpg',
  },
  render: args => <CoverCard {...args} />,
};

export const OutlinedCardExample: StoryObj<typeof OutlinedCard> = {
  args: {
    강사: '김코딩',
    타이틀: '김코딩의 자바스크립트 강의',
    플랫폼: 'fastcampus',
    이미지:
      'https://storage.googleapis.com/static.fastcampus.co.kr/prod/uploads/202308/132817-865/thumb--1-.jpg',
  },
  render: args => <OutlinedCard {...args} />,
};

export const LandScapeCardExample: StoryObj<typeof LandScapeCard> = {
  args: {
    강사: '김코딩',
    타이틀: '김코딩의 자바스크립트 강의',
    가격: '100,000',
    플랫폼: 'fastcampus',
    이미지:
      'https://storage.googleapis.com/static.fastcampus.co.kr/prod/uploads/202308/132817-865/thumb--1-.jpg',
    후기수: 100,
  },
  render: args => <LandScapeCard {...args} />,
};
