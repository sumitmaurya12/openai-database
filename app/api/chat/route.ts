const { OpenAI } = require("@langchain/openai");
const { APIChain } = require("langchain/chains");
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

export async function GET(request:Request,context:any) {
  // const response = await axios.get("http://localhost:3001/api/getinfo");
  // console.log(response.status,'axios response');
  const OPEN_METEO_DOCS = `BASE URL: http://localhost:3001/api/getinfo`;
  const model = new OpenAI({openAIApiKey:process.env.OPENAI_API_KEY ,modelName: "gpt-3.5-turbo-instruct" });
  const chain = APIChain.fromLLMAndAPIDocs(model, OPEN_METEO_DOCS, {
    headers: {
      // These headers will be used for API requests made by the chain.
    },
  });
  const res = await chain.call({
    question: "What is the order_status of the order_id",
  });
  // console.log(res,'api/chat')
  return NextResponse.json({
    data:res
})
}