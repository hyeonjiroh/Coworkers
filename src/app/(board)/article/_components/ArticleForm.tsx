'use client';
import React, { useState } from 'react';
import Button from '@/components/common/Button';
import InputBase from '@/components/common/Input/InputBase';
import InputTextarea from '@/components/common/Input/InputTextarea';
import FileInput from '@/app/(board)/article/_components/FileInput';
import { postArticle, patchArticleById } from '@/lib/apis/article';
import { ArticleBody, ArticleResponse } from '@/lib/apis/article/type';
import { toast } from 'react-toastify';

interface ArticleFormProps {
  title: string;
  initialTitle?: string;
  initialContents?: string;
  initialImageUrl?: string | null;
  articleId?: number;
  onSubmit: (success: boolean, message?: string, articleId?: number) => void;
}

const ArticleForm = ({
  title,
  initialTitle = '',
  initialContents = '',
  initialImageUrl = null,
  articleId,
  onSubmit,
}: ArticleFormProps) => {
  const [formTitle, setTitle] = useState(initialTitle);
  const [formContents, setContents] = useState(initialContents);
  const [imageUrl, setImageUrl] = useState<string | null>(initialImageUrl);

  const handleSubmit = async () => {
    if (!formTitle.trim()) {
      toast.error('제목은 필수로 작성해주세요.');
      return;
    }

    if (!formContents.trim()) {
      toast.error('내용은 필수로 작성해주세요.');
      return;
    }

    const body: ArticleBody = {
      title: formTitle.trim(),
      content: formContents.trim(),
      image: imageUrl,
    };

    try {
      const response: ArticleResponse | null = articleId
        ? await patchArticleById({ articleId, body })
        : await postArticle({ body });

      if (response && response.id) {
        onSubmit(true, '게시글이 등록되었습니다.', response.id);
        toast.success('게시글이 등록되었습니다.');
      } else {
        onSubmit(false, '게시글 처리에 실패했습니다.');
        toast.error('게시글 처리에 실패했습니다.');
      }
    } catch {
      onSubmit(false, '게시글 처리 중 오류가 발생했습니다.');
      toast.error('게시글 처리 중 오류가 발생했습니다.');
    }
  };

  return (
    <div>
      <section className="laptop:px-6 m-auto mt-14 mb-14 min-h-full max-w-[1248px] p-4">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="tablet:text-xl-bold text-2lg-medium">{title}</h2>
          <Button
            variant="primary"
            styleType="filled"
            size="lg"
            radius="sm"
            className="tablet:min-w-[184px] tablet:opacity-100 tablet:inline hidden opacity-0"
            onClick={handleSubmit}
          >
            등록
          </Button>
        </div>
        <div className="border-gray-750/10 mb-10 w-full border-1"></div>
        <InputBase
          title="제목"
          type="text"
          value={formTitle}
          placeholder="제목을 입력해주세요.*"
          onChange={(e) => setTitle(e.target.value)}
          className="w-full"
          containerClassName="mt-3 h-[48px] bg-slate-800 mb-10"
        />
        <InputTextarea
          title="내용"
          variant="box"
          value={formContents}
          placeholder="내용을 입력해주세요.*"
          onChange={(e) => setContents(e.target.value)}
          className="h-[240px] w-full overflow-y-auto whitespace-normal"
          inputClassName="mt-3 bg-slate-800 mb-10 h-[240px] px-6 py-4"
        />
        <FileInput
          title="이미지"
          initialUrl={imageUrl}
          onChange={(url) => setImageUrl(url)}
          containerClassName="mb-10"
        />
        <Button
          variant="primary"
          styleType="filled"
          size="lg"
          radius="sm"
          className="tablet:opacity-0 tablet:hidden mb-10 block w-full opacity-100"
          onClick={handleSubmit}
        >
          등록
        </Button>
      </section>
    </div>
  );
};

export default ArticleForm;