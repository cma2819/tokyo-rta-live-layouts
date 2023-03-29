FROM cma2819/nodecg

RUN nodecg install nodecg/nodecg-speedcontrol

CMD ["nodecg", "start"]