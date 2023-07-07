import codes from '@/codes_missing.json';
import { NextResponse } from "next/server";


/**
 * GET request handler for the bonus codes API endpoint.
 * Returns an array of all bonus codes and an array of duplicate bonus codes.
 * @returns {Promise<NextResponse>} A Promise that resolves to a NextResponse object with JSON data.
 */
export async function GET() {
  const bonusCodes = codes.map(code => code.bonusCode);
  const duplicates = bonusCodes.filter((value, index) => {
    return bonusCodes.indexOf(value) !== index;
  });
  return NextResponse.json({ bonusCodes, duplicates });
}