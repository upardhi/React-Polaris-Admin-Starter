import { httpApi } from "./http.api";

export const deleteCandidateNote = async (
  id: number,
  candidate: number
): Promise<any> => {
  return httpApi.delete<any>(`candidate/notes/${id}`, {
    data: { candidate: candidate },
  });
};

export const addCandidateNote = (candidateNotePayload: {
  note: string;
  candidate: number;
}): Promise<any> =>
  httpApi
    .post<any>("candidate/notes/", { ...candidateNotePayload })
    .then(({ data }) => data);

export const updateCandidateNote = (
  noteId: any,
  candidateNotePayload: { note: string; candidate: number }
): Promise<any> =>
  httpApi
    .patch<any>("candidate/notes/" + noteId, { ...candidateNotePayload })
    .then(({ data }) => data);

export const getCandidateDetails = (id: number): Promise<any[]> =>
  httpApi
    .get<any[]>("candidate/candidate/" + id)
    .then((data: any) => data.data);

export const getCandidateNoteList = (candidateId: number): Promise<any[]> =>
  httpApi
    .get<any[]>("candidate/notes/" + candidateId)
    .then((data: any) => data.data);

export const getCandidateNoteDetails = (
  noteId: number,
  candidateId: number
): Promise<any[]> =>
  httpApi
    .get<any[]>("candidate/notes/" + noteId)
    .then((data: any) => data.data);

export const updateMediaLinks = (mediaLinkPayload: any): Promise<any> =>
  httpApi
    .post<any>("candidate/profile-assignment/add-link-to-profile/", {
      ...mediaLinkPayload,
    })
    .then(({ data }) => data);

export const authorizedUser = (): Promise<any> =>
  httpApi
    .post<any>("candidate/mail/authorize-user/", {})
    .then(({ data }) => data);

export const unauthorized = (): Promise<any> =>
  httpApi.post<any>("candidate/mail/unauthorize/", {}).then(({ data }) => data);

export const authorizationSuccess = ({
  state,
  hd,
  authuser,
  scope,
  code,
  prompt,
}: any): Promise<any> =>
  httpApi
    .get<any>(
      `candidate/mail/confirm-authorization/?state=${state}&hd=${hd}&authuser=${authuser}&scope=${scope}&prompt=${prompt}&code=${code}`
    )
    .then(({ data }) => data);

export const sendEmail = (emailPayload: any): Promise<any> =>
  httpApi
    .post<any>("candidate/mail/send-mail/", emailPayload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then(({ data }) => data);
