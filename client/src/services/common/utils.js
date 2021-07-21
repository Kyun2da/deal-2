const utils = {
  // --------------------------------
  //  Parse a url and break it into resource, id and verb
  // --------------------------------
  parseRequestURL: () => {
    const url = window.location.hash.slice(1).toLowerCase() || '/';
    const r = url.split('/');
    const request = {
      resource: null,
      id: null,
      verb: null,
    };
    [, request.resource, request.id, request.verb] = r;

    return request;
  },

  encodeQueryData: (data) => {
    const ret = [];
    for (const [key, value] of Object.entries(data)) {
      if (key && value)
        ret.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
    }
    return ret.join('&');
  },

  calcDate: (dateTime) => {
    const difference = new Date() - new Date(dateTime);
    const year = Math.floor(difference / 1000 / 60 / 60 / 24 / 365);
    const month = Math.floor(difference / 1000 / 60 / 60 / 24 / 30);
    const day = Math.floor(difference / 1000 / 60 / 60 / 24);
    const hour = Math.floor(difference / 1000 / 60 / 60);
    const minute = Math.floor(difference / 1000 / 60);
    const second = Math.floor(difference / 1000);

    if (year > 0) return `${year}년 전`;
    if (month > 0) return `${month}개월 전`;
    if (day > 0) return `${day}일 전`;
    if (hour > 0) return `${hour}시간 전`;
    if (minute > 0) return `${minute}분 전`;
    if (second > 0) return `${second}초 전`;
    return `방금 전`;
  },
};

export default utils;
