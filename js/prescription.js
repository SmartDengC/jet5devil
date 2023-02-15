    (function () {
      //�������������200 �������400��������������
      let warningDay = 20;
      let errorDay = 40;
      // �������������������
      let times = document.getElementsByTagName("time");
      if (times.length === 0) {
        return;
      }
      let posts = document.getElementsByClassName("post-content");
      if (posts.length === 0) {
        return;
      }

      // ���������
      let pubTime = new Date(times[0].dateTime); /* ������� */
      let now = Date.now(); /* ����� */
      let interval = parseInt(now - pubTime);
      let days = parseInt(interval / 86400000);
      /* �������������� */
      //note warning �� note danger � Next ������������������������������������
      if (
        interval > warningDay * 3600 * 2 * 1000 &&
        interval < errorDay * 3600 * 24 * 1000
      ) {
        posts[0].innerHTML =
          '<div class="note warning">' +
          "<h5>�������</h5><p>������� " +
          days +
          " ������������������������</p>" +
          "</div>" +
          posts[0].innerHTML;
      } else if (interval >= errorDay * 3600 * 24 * 1000) {
        posts[0].innerHTML =
          '<div class="note danger">' +
          "<h5>�������</h5><p>������� " +
          days +
          " ������������������������</p>" +
          "</div>" +
          posts[0].innerHTML;
      }
    })();4
