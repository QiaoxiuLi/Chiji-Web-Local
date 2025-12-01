import React, { useState } from 'react';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // 钉钉机器人 Webhook URL
  // TODO: 在此处填入您的钉钉机器人 Webhook 地址 (API Key)
  const DINGTALK_WEBHOOK_URL = "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // 构造钉钉消息
    const content = `【网站留言】\n你是谁呢？: ${formData.name}\n想说什么呀？: ${formData.message}`;

    try {
      if (DINGTALK_WEBHOOK_URL) {
        // 使用 fetch 发送 webhook 请求
        // 注意：前端直接调用钉钉接口可能会遇到 CORS 跨域问题
        // 如果遇到跨域报错，建议通过后端转发或使用支持跨域的代理服务
        await fetch(DINGTALK_WEBHOOK_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
             "msgtype": "text",
             "text": {
                 "content": content
             }
          })
        });
      } else {
        console.warn("李翘秀比较懒，忘记配置钉钉URL了，无法提交。");
        // 模拟网络延迟
        await new Promise(resolve => setTimeout(resolve, 1000));
      }

      // Set success status
      setStatus('success');
      setFormData({ name: '', message: '' });

      // Reset status after a few seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error("提交失败", error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            联系李某
          </h2>
          <p className="mt-4 text-xl text-slate-500">
            无论是项目咨询还是相关合作，我随时期待您的来信，或者在下方填写您的信息，如果我有空的话，会看看。
          </p>
        </div>

        <div className="flex flex-col gap-8 max-w-3xl mx-auto">
          {/* Contact Info */}
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-10 w-full">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">联系方式</h3>
            
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-100 text-brand-600">
                  <Mail className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h5 className="text-lg font-medium text-slate-900">发送邮件</h5>
                <p className="mt-1 text-slate-500">mcliqiaoxiu@outlook.com</p>
                <p className="text-sm text-slate-400">希望我会在24小时内回复</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 w-full flex flex-col justify-center min-h-[400px]">
            {status === 'success' ? (
              <div className="flex-grow flex flex-col items-center justify-center animate-fadeIn py-12">
                 <div className="p-6 rounded-full bg-green-50 mb-6">
                   <CheckCircle className="w-16 h-16 text-green-500" />
                 </div>
                 <h3 className="text-2xl font-bold text-slate-900 mb-2">提交完成</h3>
                 <p className="text-slate-500 text-center max-w-sm">感谢您的留言，我会尽快查看。</p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700">你是谁呢？</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={status === 'submitting'}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 bg-slate-50 border p-3 disabled:opacity-50" 
                    placeholder="请输入您的称呼"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700">有什么想说的吗？</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={status === 'submitting'}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 bg-slate-50 border p-3 disabled:opacity-50" 
                    placeholder="请在此输入内容..."
                  ></textarea>
                </div>

                {status === 'error' && (
                  <div className="p-4 rounded-md bg-red-50 text-red-700 flex items-center animate-fadeIn">
                    <AlertCircle className="w-5 h-5 mr-2" />
                    <span>提交失败，请稍后重试。</span>
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white transition-colors ${
                    status === 'submitting'
                      ? 'bg-brand-400 cursor-not-allowed' 
                      : 'bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500'
                  }`}
                >
                  <Send className="mr-2 h-4 w-4" />
                  {status === 'submitting' ? '提交中...' : '提交信息'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};